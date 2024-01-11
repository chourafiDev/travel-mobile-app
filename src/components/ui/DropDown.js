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
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      zIndex={zIndex}
      style={{ borderColor: "#162B451A" }}
      textStyle={{
        color: "#222B45",
        fontFamily: "baiJamjuree-medium",
      }}
      dropDownContainerStyle={{
        borderColor: "#162B451A",
      }}
      ArrowDownIconComponent={() => (
        <Icon
          style={{ marginRight: 5 }}
          color="#222B45"
          name="chevron-up"
          size={20}
        />
      )}
      ArrowUpIconComponent={() => (
        <Icon
          style={{ marginRight: 5 }}
          color="#222B45"
          name="chevron-down"
          size={20}
        />
      )}
      TickIconComponent={() => (
        <Icon
          style={{ marginRight: 5 }}
          color="#222B45"
          name="check"
          size={20}
        />
      )}
    />
  );
}
