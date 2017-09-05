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
    }
}`;
export class MessegeData {
    public static data: any;
    constructor() {
        MessegeData.data = JSON.parse(data);
    }
}