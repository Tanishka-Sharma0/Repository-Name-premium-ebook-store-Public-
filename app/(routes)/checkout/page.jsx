import OrderSummary from "@/components/checkout/OrderSummary";
import PaymentOptions from "@/components/checkout/PaymentOptions";

export default function CheckoutPage() {
    return (
        <section className="section-padding">
            <div className="container-custom px-6">
                <h1 className="text-5xl font-black mb-12">
                    Checkout
                </h1>

                <div className="grid gap-8 lg:grid-cols-2">
                    <OrderSummary />

                    <PaymentOptions />
                </div>
            </div>
        </section>
    );
}