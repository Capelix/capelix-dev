import type { Images } from "@/interfaces/images"
import { getImagesWithSize } from "@/libs/getImageSizes"

export const getImages = (): Images[] => {
	return getImagesWithSize("portraits")
}
