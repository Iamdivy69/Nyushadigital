export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    bio?: string;
}

export const team: TeamMember[] = [
    {
        id: "1",
        name: "Arjun Mehta",
        role: "Master Craftsman",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D",
        bio: "With over 20 years of experience in weaving, Arjun leads our production team."
    },
    {
        id: "2",
        name: "Sarah Jenkins",
        role: "Sustainable Design Lead",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
        bio: "Sarah ensures every product meets our eco-friendly standards without compromising style."
    },
    {
        id: "3",
        name: "Rohan Gupta",
        role: "Community Manager",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        bio: "Rohan connects our artisans with the resources they need to thrive."
    },
    {
        id: "4",
        name: "Priya Sharma",
        role: "Quality Control",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        bio: "Expert eye for detail ensuring every stitch is perfect."
    }
];
