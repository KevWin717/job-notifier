const axios = require('axios');
const Job = require('./models/Job')

const fetchJobs = async () => {
    try {
        const response = await axios.get(
            'https://api.adzuna.com/v1/api/jobs/us/search/1',
            {
                params: {
                    app_id: process.env.APP_ID,
                    app_key: process.env.API_Key,
                    results_per_page: 5,
                    what: 'software engineer',
                    where: 'Austin, TX',
                },
            }
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
                console.log('Saved job: ${job.title}');
            } else {
                console.log('Job already exists: ${existingJob.title}');
            }
        }
    } catch (error) {
        console.error('Error fetching jobs:', error.message);
    }
};

module.exports = { fetchJobs };