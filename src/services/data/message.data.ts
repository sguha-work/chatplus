const data = `{
    "CANT_READ_PHONE_NUMBER": {
        "en": "Cannot read the phone number.",
        "hin": "फ़ोन नंबर पढ़ नहीं सकते"
    },
    "NO_INTERNET_CONNECTION": {
        "en": "Please check your internet connection.",
        "hin": "कृपया अपने इंटरनेट कनेक्शन की जाँच करें।"
    },
    "UNABLE_TO_DELIVER_MESSEGE": {
        "en": "Unable to deliver messege. Please try after sometime.",
        "hin": "संदेश वितरित करने में असमर्थ, कृपया कुछ देर बाद प्रयास करें।"
    },
    "SIM_READ_PERMISSION_DENIED": {
        "en": "You denied reading SIM information, cannot start application.",
        "hin": ""
    },
    "UNABLE_TO_GET_SIM_INFO": {
        "en": "Unable to read SIM information cannot start application.",
        "hin": ""
    },
    "NO_SIM_IN_DEVICE": {
        "en": "No SIM card detected in device, Unable to start application",
        "hin": ""
    },
    "UNABLE_TO_READ_FILE": {
        "en": "Can't read file",
        "hin": ""
    }
}`;
export class MessageData {
    public static data: any;
    constructor() {
        MessageData.data = JSON.parse(data);
    }
}