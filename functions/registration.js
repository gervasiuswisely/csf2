const axios = require("axios");
const settings = require("./credential-settings");

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    const data = JSON.parse(event.body);
    const requestUrl = settings.wrapUrl("users/registration");
    axios.defaults.headers.common.Id = process.env.APP_ID;
    axios.defaults.headers.common.Secret = process.env.APP_SECRET;
    if (data.letterFile === undefined) {
      data.letterFile = "0"
    }

    if (data.paymentFile === undefined) {
      data.paymentFile = "0"
    }


    let submitData = {}


    if (data.profileId === "check"){
      submitData = {
        phoneNumber: data.phoneNumber,
        acp: data.acp,
        letterFile: data.letterFile,
        paymentFile: data.paymentFile,
        profileId: "check",
        outlets: data.outlets,
        status: 10,
        psId: data.psId,
        psName: data.psName,
        createdAt: new Date(),
        createdBy: "cim website"
      }
    } else {
      submitData = {
        fullName: data.fullName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        // callName: data.callName,
        dob: data.dob,
        baptistName: data.baptismName,
        // lingkungan: data.lingkungan,
        parokiId: data.parokiId,
        keuskupanId: data.keuskupanId,
        parokiName: data.parokiName,
        keuskupanName: data.keuskupanName,
        address: data.address,
        acp: data.acp,
        letterFile: data.letterFile,
        paymentFile: data.paymentFile,
        profileId: "",
        outlets: data.outlets,
        status: 10,
        psId: data.psId,
        psName: data.psName,
        createdAt: new Date(),
        createdBy: "cim website"
      };
    }
    if (data.outlets){
      submitData.outlets = data.outlets
    }
    const response = await axios.post(requestUrl, submitData);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };

  } catch (error) {
    // ini dirancang untuk error axiosnya, bukan untuk logic javascriptnya
    // eg: circular json berarti dari javascript
    // console.log(error);
    let statusCode = 500;
    let body = "An error has occured (500)";
    if (error.response && error.response.status) {
      statusCode = error.response.status;
      body = error.response.data.message;
    }
    return {
      statusCode,
      body,
    };
  }
};

module.exports = { handler };
