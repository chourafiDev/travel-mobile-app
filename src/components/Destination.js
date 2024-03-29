import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import Icon from "react-native-vector-icons/Feather";
import { shadow } from "../../utils/theme";
import { useColorScheme } from "nativewind";
import { useNavigation } from "@react-navigation/native";
import { DESTINATION } from "../constants/routes";
import { emptyHeart, fullHeart } from "../../utils/assets";
import {
  useFavoriteMutation,
  useGetFavoritesQuery,
  useUnfavoriteMutation,
} from "../store/services/favoritesApiSlice";
import Toast from "react-native-toast-message";

export default function Destination({
  destination: { id, title, images, destination, price },
}) {
  const navigation = useNavigation();
  const { colorScheme } = useColorScheme();

  // fetch favorites destinations
  const { data: favorites } = useGetFavoritesQuery();

  // check if destination favorite
  const isFavorite = favorites?.some((item) => item.destinationId === id);

  // handle favorite and unfavorite destination
  const [
    favorite,
    { isLoading: isFavoriteLoading, isSuccess: isFavoriteSuccess },
  ] = useFavoriteMutation();
  const [
    unfavorite,
    { isLoading: isUnfavoriteLoading, isSuccess: isUnfavoriteSuccess },
  ] = useUnfavoriteMutation();

  const submitFavoriteOrUnfavorite = async () => {
    try {
      if (isFavorite) {
        await unfavorite(id).unwrap();
      } else {
        await favorite({ destinationId: Number(id) }).unwrap();
      }
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err.data?.message || err.error,
      });
    }
  };

  useEffect(() => {
    if (isFavoriteSuccess) {
      Toast.show({
        type: "success",
        text1: "Destination Favorited Successfully",
      });
    }

    if (isUnfavoriteSuccess) {
      Toast.show({
        type: "success",
        text1: "Destination Unfavorited Successfully",
      });
    }
  }, [isFavoriteSuccess, isUnfavoriteSuccess]);

  return (
    <TouchableOpacity
      className="rounded-2xl px-1 pt-1 pb-3 bg-white dark:bg-dark-2 mr-3 relative border border-gray-50 dark:border-dark-2 w-full"
      style={[colorScheme == "light" && shadow.boxShadow]}
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate(DESTINATION, {
          destinationId: id,
        });
      }}
    >
      <TouchableOpacity
        className="absolute top-3 right-3 z-40 bg-white backdrop-blur-md w-7 h-7 rounded-full justify-center items-center"
        style={[shadow.boxShadow]}
        onPress={submitFavoriteOrUnfavorite}
      >
        {isFavoriteLoading || isUnfavoriteLoading ? (
          <ActivityIndicator size="small" color="#ef476f" />
        ) : (
          <Image
            source={isFavorite ? fullHeart : emptyHeart}
            className="w-4 h-4"
          />
        )}
      </TouchableOpacity>

      <Image
        source={{ uri: images[0]?.imageUrl }}
        className="rounded-2xl w-full h-32"
      />

      <View className="mt-4 flex-row justify-between gap-x-4 items-center">
        <Text
          className="text-dark dark:text-white text-base"
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{ fontFamily: "baiJamjuree-semibold", flexShrink: 1 }}
        >
          {title}
        </Text>
        <Text
          className="text-dark/50 dark:text-white/50 text-xs"
          style={{ fontFamily: "baiJamjuree-semibold" }}
        >
          ${price}
        </Text>
      </View>
      <View className="flex-row gap-1 items-center">
        <Icon
          name="map-pin"
          style={{
            fontFamily: "baiJamjuree-bold",
          }}
          size={12}
          color="#23A892"
        />
        <Text
          className="text-dark/60 dark:text-white/60"
          style={{ fontFamily: "baiJamjuree-medium" }}
        >
          {destination}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
