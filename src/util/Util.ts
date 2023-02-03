export default class Util {
    static stringFormat(template: string, ...args: any[]) {
        return template.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
                ;
        });
    };
}