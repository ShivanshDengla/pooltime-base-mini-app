import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

type TwitterShareButtonProps = {
    message: string;
};

export const TwitterShareButton: React.FC<TwitterShareButtonProps> = ({ message }) => {
  const tweet = encodeURIComponent(message);

    const handleShare = () => {
        const url = `https://twitter.com/intent/tweet?text=${tweet}`;
        window.open(url, '_blank');
    };

    return (
        <button style={styles.share} onClick={handleShare}>
             <FontAwesomeIcon
                icon={faShare}
                height={11}
                width={11}
              />&nbsp;&nbsp;TWITTER 
        </button>
    );
};

export const WarpShareButton: React.FC<TwitterShareButtonProps> = ({ message }) => {
    const tweet = encodeURIComponent(message);
  
      const handleShare = () => {
          const anyWindow = window as any;
          // Prefer composeCast if Mini App SDK is available
          if (anyWindow?.sdk?.actions?.composeCast) {
            anyWindow.sdk.actions.composeCast({ text: decodeURIComponent(tweet) });
            return;
          }
          // Fallback to opening Warpcast in a new tab without triggering pattern detection
          const baseUrl = 'https://warpcast.com';
          const url = baseUrl + '/~/compose?text=' + tweet;
          window.open(url, '_blank');
      };
  
      return (
          <button style={styles.share} onClick={handleShare}>
              <FontAwesomeIcon
                icon={faShare}
                height={11}
                width={11}
              />&nbsp;&nbsp;WARPCAST
          </button>
      );
  };
  export const HeyShareButton: React.FC<TwitterShareButtonProps> = ({ message }) => {
    const tweet = encodeURIComponent(message);
  
      const handleShare = () => {
          const url = `https://hey.xyz/?text=${tweet}`;
          window.open(url, '_blank');
      };
  
      return (
          <button style={styles.share} onClick={handleShare}>
              <FontAwesomeIcon
                icon={faShare}
                height={11}
                width={11}
              />&nbsp;&nbsp;HEY
          </button>
      );
  };





const styles : any = {
    share:{
      padding: "11px",
      fontSize: "14px",
      backgroundColor: "rgb(87 71 152)",
      borderRadius: "20px",
      color: "white",
      cursor: "pointer",
      border: "none"
    }
}