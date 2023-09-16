import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import CodeBlockWithCopyButton from "../components/CodeBlockWithCopyButton";

const APIPage = () => {
  const javaScriptCode = `
  app.post('/process_image', upload.single('file'), async (req, res) => {
    try {
      const imageBuffer = req.file.buffer;
  
      const model = await ObjectDetection.load();

      const inputTensor = tf.node.decodeImage(imageBuffer);
      const predictions = await model.detect(inputTensor);
  
      const jsonResults = JSON.stringify(predictions);
  
      res.send(jsonResults);
    } catch (error) {
      res.status(500).send({ error: 'An error occurred' });
    }
  });
  `;
  const pythonCode = `image_file = request.files["file"]
print(type(image_file))
image_bytes = image_file.read()
model = yolov5.load("best.pt")
img = Image.open(io.BytesIO(image_bytes))
results = model(img, size=640)  # reduce size=320 for faster inference
results.show()
return results.pandas().xyxy[0].to_json(orient="records")`;

  const sampleResponse = `[
    { "xmin": 274.3086853027, "ymin": 449.2939453125, "xmax": 323.8813171387, "ymax": 506.7611694336, "confidence": 0.8015038371, "class": 0, "name": "bh" }, 
    { "xmin": 37.3960533142, "ymin": 99.2782821655, "xmax": 129.5557098389, "ymax": 199.8358306885, "confidence": 0.7850781083, "class": 0, "name": "bh" }, 
    { "xmin": 656.1591186523, "ymin": 463.1016235352, "xmax": 710.3174438477, "ymax": 546.3992919922, "confidence": 0.7801984549, "class": 0, "name": "bh" }
  ]`;
  return (
    <div>
      <Navbar />
      <section class="text-gray-400 bg-gray-900 body-font min-h-screen">
        <div class="container px-20 py-8 mx-auto flex flex-wrap">
          <div class="flex flex-col text-center mb-20 items-center">
            <h1 class="text-4xl text-green-400 tracking-widest font-medium title-font mb-9">
              Tree API
            </h1>
            <button
              className="mt-2 bg-green-600 hover:bg-green-300 text-white py-2 px-4 rounded-full focus:outline-none items-center "
              style={{ width: "100%", maxWidth: "150px" }}
            >
              Get API Key
            </button>
            <div className="float-left ">
              <h2 class="text-2xl text-green-400 font-medium title-font mb-9 mt-9 text-left">
                JavaScript
              </h2>
              <CodeBlockWithCopyButton code={javaScriptCode} />
            </div>

            <div>
              <h2 class="text-2xl text-green-400 font-medium title-font mb-9 mt-9 text-left">
                Python
              </h2>
              <CodeBlockWithCopyButton code={pythonCode} />
            </div>

            <div>
              <h2 class="text-2xl text-green-400 font-medium title-font mb-9 mt-9 text-left">
                Sample Response
              </h2>
              <CodeBlockWithCopyButton code={sampleResponse} />
            </div>
          </div>
          {/* <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/2">
              <div class="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <Link to="/predict">
                    <h2 class="text-green-400 text-2xl title-font font-medium hover:text-green-200">
                      PREDICTION
                    </h2>
                  </Link>
                </div>
                <div class="flex-grow">
                  <p class="text-lg leading-relaxed text-base">
                    Experience the power of prediction with our advanced image
                    analytics tool. Simply upload your aerial image, and let our
                    technology work its magic. We'll not only accurately count
                    the trees but also identify their species, providing you
                    with essential insights for responsible land development.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/2">
              <div class="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <Link to="/explore">
                    <h2 class="text-green-400 text-2xl title-font font-medium hover:text-green-200">
                      EXPLORE
                    </h2>
                  </Link>
                </div>
                <div class="flex-grow">
                  <p class="text-lg leading-relaxed text-base">
                    Experience the wonders of nature through our Explore
                    feature. View an array of tree species with detailed
                    descriptions, including average height and girth. Dive into
                    the fascinating world of trees with ease.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default APIPage;
