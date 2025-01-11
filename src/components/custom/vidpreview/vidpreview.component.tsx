
import { THUMBNAIL } from "@/assets";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

const VidPreview = () => {
  return (
    <div className="rounded-xl">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/khl_3bbpbgI?si=8uLgYDUeXl3-Z2xK"
        thumbnailSrc={THUMBNAIL}
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/khl_3bbpbgI?si=8uLgYDUeXl3-Z2xK"
        thumbnailSrc={THUMBNAIL}
        thumbnailAlt="Hero Video"
      />
    </div>
  )
}

export default VidPreview