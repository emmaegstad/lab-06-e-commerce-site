export const colors = ['67a4ee', 'ebab4b', '64c363'];

export function generateColor() {
    const randomNum = Math.floor(Math.random() * 4);
    return colors[randomNum];
}
