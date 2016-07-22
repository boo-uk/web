import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


base64 = function(element, callback) {
    let reader = new FileReader();
    let file = element.files[0];
    if (file) {
        reader.readAsDataURL(file);
        reader.onload = function(event) {
            callback(event.target.result);
            return true;
        };
    }else {
        callback();
    }
};

