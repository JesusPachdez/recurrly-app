import { tabs } from "@/constants/data";
import clsxClasses from "clsx";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";

const TabsLayout = () => {
  const RenderTabIcon = ({ focused, icon }: TabIconProps) => {
    return (
      <View className={"tabs-icon"}>
        <View className={clsxClasses("tabs-pill", focused && "tabs-active")}>
          <Image source={icon} className={"tabs-glyph"} />
        </View>
      </View>
    );
  };
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      {tabs.map((tab) => {
        return (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              title: tab.title,
              tabBarIcon: ({ focused }) => (
                <RenderTabIcon focused={focused} icon={tab.icon} />
              ),
            }}
          />
        );
      })}
    </Tabs>
  );
};

export default TabsLayout;
