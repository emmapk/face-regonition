// const labels = ["michael", "jude", "isaac", "pk"];

// const labeledFaceDescriptors = await Promise.all(
//     labels.map(async (label) => {
//         const imageUrl = `${label}.png`;
//         const image = await faceapi.fetchImage(imageUrl);

//         const fullFaceDescription = await faceapi.detectSingleFace(image).withFaceLandmarks().withFaceDescriptor();

//         if (!fullFaceDescription) {
//             throw new Error(`No face detected for ${label}`);
//         }

//         const faceDescriptors = [fullFaceDescription.descriptor];
//         return new faceapi.LabeledFaceDescriptors(label, faceDescriptors);
//     })
// );
