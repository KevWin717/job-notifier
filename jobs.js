require('dotenv').config();
const axios = require('axios');
const Job = require('./models/Job')

// console.log('MONGO_URI:', process.env.MONGO_URI);

const fetchJobs = async () => {
    try {
        const params = {
            app_id: process.env.APP_ID,
            app_key: process.env.API_KEY,
            results_per_page: 50,
            what: process.env.JOB_SEARCH_TERM || 'software engineer',
            where: process.env.JOB_LOCATION || 'Austin, TX',
        };

        console.log('Request Params:', params);

        const response = await axios.get(
            'https://api.adzuna.com/v1/api/jobs/us/search/1',
            { params }
        );
        
        const jobs = response.data.results;

        for(const jobData of jobs) {
            const existingJob = await Job.findOne({ jobId: jobData.id });
            if(!existingJob) {
                const job = new Job({
                    jobId: jobData.id,
                    title: jobData.title,
                    company: jobData.company.display_name,
                    location: jobData.location.display_name,
                    description: jobData.description,
                    url: jobData.redirect_url,
                });
                await job.save();
                console.log(`Saved job: ${job.title}`);
            } else {
                console.log(`Job already exists: ${existingJob.title}`);
            }
        }
    } catch (error) {
        if (error.response) {
            console.error(`Error fetching jobs: ${error.response.status} - ${error.response.statusText}`);
            console.error('Response data:', error.response.data);
        } else if (error.request) {
            console.error('No response received:', error.request);
        } else {
            console.error('Error setting up the request:', error.message);
        }
    }
};

module.exports = { fetchJobs };