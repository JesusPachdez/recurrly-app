import React from "react";
import { Image, View } from "react-native";

const UpcomingSubscriptionCard = ({
  data: { name, price, daysLeft, icon },
}: UpcomingSubscription) => {
  return (
    <View className="upcoming-card">
      <View className="upcoming-row">
        <Image source={icon} className="upcoming-icon" />
      </View>
    </View>
  );
};

export default UpcomingSubscriptionCard;
