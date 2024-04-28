import { SubscriptionButton } from "@/components/SubscriptionButton";
import { checkSubscription } from "@/lib/subscription";

const BillingPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div className="h-full space-y-3 ml-24 mt-24 py-6 px-12 mb-20">
      <h3 className="text-lg font-medium">Settings</h3>
      <div className="text-sm text-muted-foreground">
        {isPro
          ? "You are currently on a Pro plan."
          : "You are currently on a free plan."}
      </div>
      <SubscriptionButton isPro={isPro} />
    </div>
  );
};

export default BillingPage;
