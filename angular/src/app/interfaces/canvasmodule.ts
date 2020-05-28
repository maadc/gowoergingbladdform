export interface CanvasModule {
    id: string,
    idHTML: string,
    type: string,
    position: {
        x: number,
        y: number,
        height: number,
        width: number
    },
    content: string
}