export const FEATURED_TECHNIQUES = [
    {
        id: 'fire-gaze',
        title: 'Fire Gaze Breath',
        duration: '5 min',
        level: 'Advanced',
        image: '',
        visualType: 'fire-gaze',
        visualRatio: '4:4:4:4',
        isFavorite: false,
    },
    {
        id: '1',
        title: 'Anulom Vilom',
        duration: '10 min',
        level: 'Beginner',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
        isFavorite: true,
    },
];

export const TECHNIQUE_DETAILS = {
    'fire-gaze': {
        id: 'fire-gaze',
        title: 'Fire Gaze Breath',
        subtitle: 'Agni Drishti Pranayama',
        difficulty: 'Advanced',
        duration: '5 minutes',
        image: '',
        visualType: 'fire-gaze',
        visualRatio: '4:4:4:4',
        description: 'An advanced visualization-based breathing technique designed to sharpen focus and generate inner heat (Agni).',
        steps: [
            'Posture: Sit upright and relax your shoulders.',
            'Focus: Keep eyes open, softly fixed on the yellow core.',
            'Inhale: Breathe in as the fire expands and brightens.',
        ],
        benefits: ['Improves concentration', 'Generates internal heat'],
        precautions: ['Avoid if you have high blood pressure'],
    },
    '1': {
        id: '1',
        title: 'Anulom Vilom',
        subtitle: 'Alternate Nostril Breathing',
        difficulty: 'Beginner',
        duration: '10 minutes',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
        visualType: 'circle',
        visualRatio: '4:4:4:4',
        description: 'A powerful breathing technique that balances the hemispheres of the brain.',
        steps: [
            'Sit comfortably and close your eyes.',
            'Use your thumb to close your right nostril.',
            'Inhale deeply through your left nostril...',
        ],
        benefits: ['Reduces stress', 'Improves respiratory health'],
        precautions: ['Do not strain your breath'],
    },
};
