import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Clear existing data
    await prisma.userSession.deleteMany({});
    await prisma.user.deleteMany({});
    await prisma.technique.deleteMany({});
    await prisma.category.deleteMany({});
    await prisma.blog.deleteMany({});
    await prisma.foodMenu.deleteMany({});

    // 1. Categories
    await prisma.category.create({
        data: {
            id: '1',
            title: 'Pranayama',
            icon: '🧘',
            color: '#8B9467',
            description: 'Control your breath, control your life.',
            image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&auto=format&fit=crop',
        },
    });

    await prisma.category.create({
        data: { id: '2', title: 'Asanas', icon: '🧘‍♂️', color: '#C9E4CA', description: 'Physical postures for health and stability.', image: '' },
    });
    await prisma.category.create({
        data: { id: '3', title: 'Meditation', icon: '🕉️', color: '#6495ED', description: 'Techniques to calm the mind.', image: '' },
    });
    await prisma.category.create({
        data: { id: '4', title: 'Aahar', icon: '🍎', color: '#FFB6C1', description: 'Ayurvedic nutrition and diet.', image: '' },
    });

    // 2. Techniques
    await prisma.technique.create({
        data: {
            id: 'fire-gaze',
            title: 'Fire Gaze Breath',
            subtitle: 'Agni Drishti Pranayama',
            difficulty: 'Advanced',
            duration: '5 minutes',
            image: '',
            visualType: 'fire-gaze',
            visualRatio: '4:4:4:4',
            description: 'An advanced visualization-based breathing technique designed to sharpen focus and generate inner heat (Agni).',
            steps: JSON.stringify([
                'Posture: Sit upright and relax your shoulders.',
                'Focus: Keep eyes open, softly fixed on the yellow core.',
                'Inhale: Breathe in as the fire expands and brightens.',
            ]),
            benefits: JSON.stringify(['Improves concentration', 'Generates internal heat']),
            precautions: JSON.stringify(['Avoid if you have high blood pressure']),
            isFeatured: true,
            categoryId: '1',
        },
    });

    await prisma.technique.create({
        data: {
            id: '1',
            title: 'Anulom Vilom',
            subtitle: 'Alternate Nostril Breathing',
            difficulty: 'Beginner',
            duration: '10 minutes',
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
            visualType: 'circle',
            visualRatio: '4:4:4:4',
            description: 'A powerful breathing technique that balances the hemispheres of the brain.',
            steps: JSON.stringify([
                'Sit comfortably and close your eyes.',
                'Use your thumb to close your right nostril.',
                'Inhale deeply through your left nostril...',
            ]),
            benefits: JSON.stringify(['Reduces stress', 'Improves respiratory health']),
            precautions: JSON.stringify(['Do not strain your breath']),
            isFeatured: true,
            categoryId: '1',
        },
    });

    // 3. Blogs
    await prisma.blog.create({
        data: {
            id: '1',
            title: 'Benefits of Morning Pranayama',
            author: 'Dr. Aditi Sharma',
            date: 'Oct 15, 2023',
            readTime: '5 min read',
            image: 'https://images.unsplash.com/photo-1636714455535-7cb8e8b34790?w=900&auto=format&fit=crop&q=60',
            excerpt: 'Discover how starting your day with breathing exercises can transform your health...',
            tags: JSON.stringify(['Pranayama', 'Wellness']),
            content: JSON.stringify([
                { type: 'paragraph', text: 'Starting your day with Pranayama balances your nervous system and prepares your mind for the tasks ahead.' },
                { type: 'heading', text: 'Why Morning is Best?' },
                { type: 'paragraph', text: 'During the early morning hours (Brahmamuhurta), the air is fresh and the environment is quiet.' },
                { type: 'list', items: ['Kapalbhati for energy', 'Nadi Shodhana for balance', 'Bhramari for calm'] },
                { type: 'quote', text: '"Breath is the bridge which connects life to consciousness, which unites your body to your thoughts."' },
            ]),
        },
    });

    // 4. Food
    await prisma.foodMenu.create({
        data: {
            dosha: 'Vata-Pitta',
            season: 'Winter (Kapha Season)',
            timeOfDay: 'Early Morning',
            suggestion: 'Warm Ginger Water',
            image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd',
            description: 'Boosts metabolism and warms the body.',
            calories: '10 kcal',
            tags: JSON.stringify(['Warming', 'Digestive']),
        },
    });

    await prisma.foodMenu.create({
        data: {
            dosha: 'Vata-Pitta',
            season: 'Winter (Kapha Season)',
            timeOfDay: 'Breakfast',
            suggestion: 'Warm Mung Bean Porridge',
            image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf',
            description: 'Nourishing and easy to digest.',
            calories: '280 kcal',
            tags: JSON.stringify(['Protein', 'Sattvic']),
        },
    });

    console.log('Seed data created successfully');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
