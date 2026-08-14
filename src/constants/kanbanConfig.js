//in API we don't have deals satus. So user's blood group - is deals status 
export const DEALS_STATUS = [
    {
        id: 'open',
        title: 'Open deal',
        success: 0.2, //probability of success
        group: ['O+', 'O-']

    },
    {
        id: 'progress',
        title: 'In progress',
        success: 0.5,
        group: ['A+', 'A-']
    },

    {
         id: 'contract',
         title: 'Contract',
         success: 0.8,
         group: ['B+', 'B-']
    },

    {
        id: 'won',
        title: 'Deals won',
        success: 1.0,
        group:['AB+']

    },
    {
        id: 'lost',
        title: 'Deals lost',
        success: 0.0,
        group:['AB-']
    }
    
];