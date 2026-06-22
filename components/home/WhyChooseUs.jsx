export default function WhyChooseUs() {
    const features = [
        "Dark Mode Reader",
        "Bookmarks",
        "Highlights",
        "Instant Download",
        "Mobile Friendly",
        "Premium Reading Experience",
    ];

    return (
        <section className="section-padding">
            <div className="container-custom">
                <h2 className="text-5xl font-black">
                    Why Choose Us
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mt-12">
                    {features.map((item) => (
                        <div
                            key={item}
                            className="glass rounded-3xl p-6"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}