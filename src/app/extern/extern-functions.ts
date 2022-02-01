// Global functions that must be placed within a npm package.

export function isNullOrWhitespace(input: string): boolean {
    return !input || !input.trim();
}

export function replaceAll(str: string, find: string, replace: string) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function escapeRegExp(str: string) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}