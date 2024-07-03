import { useTranslation } from 'react-i18next'

const VideoSection = (props: any) => {
  const { t } = useTranslation('common')

  return (
    <div className={`video-section pt-185 ${props.vclass} `}>
      <div className="container">
        <div
          className="video-inner"
          style={{
            position: 'relative',
          }}
        >
          <img src="/images/video/video-image.png" alt="Video" />
          <iframe
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              zIndex: '1',
              left: '0',
              top: '0',
            }}
            src="https://thedxi.com/video/line"
          />
        </div>
      </div>
    </div>
  )
}

export default VideoSection
