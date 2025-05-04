export interface CreateSizeBaseVariantsParams {
  isMobile: boolean
  direction: 'left' | 'right'
}

const createVariants = (direction: 'left' | 'right') => {
  return {
    offscreen: { opacity: 0, translateX: direction === 'left' ? -100 : 100 },
    onscreen: {
      opacity: 1,
      translateX: 0,
      transition: { duration: 0.3 },
    },
  }
}

export const createSizeBaseVariants = ({ isMobile, direction }: CreateSizeBaseVariantsParams) => {
  const defaultVariants = createVariants(direction)
  const mobileVariants = {
    ...defaultVariants,
    offscreen: { opacity: 0, translateX: 0 },
  }

  return isMobile ? mobileVariants : defaultVariants
}
