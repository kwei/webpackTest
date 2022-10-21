export const getUserMedia = async () => {
   return await navigator.mediaDevices.getUserMedia({audio: true, video: false});
};