import { useColorScheme } from "nativewind";
import React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Feather";

export default function DropDown({
  open,
  items,
  setOpen,
  value,
  setValue,
  setItems,
  zIndex,
}) {
  const { colorScheme } = useColorScheme();
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      zIndex={zIndex}
      style={{
        borderColor: "#162B451A",
        borderRadius: 16,
        backgroundColor: colorScheme == "light" ? "#FBFBFB" : "#1A2138",
      }}
      textStyle={{
        color: colorScheme == "light" ? "#222B4580" : "#FBFBFB",
        fontFamily: "baiJamjuree-medium",
      }}
      dropDownContainerStyle={{
        borderColor: "#162B451A",
        backgroundColor: colorScheme == "light" ? "#FBFBFB" : "#1A2138",
      }}
      ArrowDownIconComponent={() => (
        <Icon
          style={{ marginRight: 5 }}
          color={colorScheme == "light" ? "#222B4580" : "#FBFBFB"}
          name="chevron-up"
          size={20}
        />
      )}
      ArrowUpIconComponent={() => (
        <Icon
          style={{ marginRight: 5 }}
          color={colorScheme == "light" ? "#222B4580" : "#FBFBFB"}
          name="chevron-down"
          size={20}
        />
      )}
      TickIconComponent={() => (
        <Icon
          style={{ marginRight: 5 }}
          color={colorScheme == "light" ? "#222B4580" : "#FBFBFB"}
          name="check"
          size={20}
        />
      )}
    />
  );
}
