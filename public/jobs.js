const axios = require('axios');

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
        console.log(jobs);
    } catch (error) {
        console.error('Error fetching jobs:', error.message);
    }
};

module.exports = { fetchJobs };