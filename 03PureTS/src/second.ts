//Why inteface is Important

interface TakePhoto {
  cameraMode : string
  filter: string
  click : number
}

//one more interface
interface Story{
  createStory(): void
}

//implementing the interface
class Instagram implements TakePhoto{
  constructor(
    public cameraMode: string,
    public filter : string,
    public click : number
  ){}
}

//implementing again with some extra fields
class Youtube implements TakePhoto, Story{
  constructor(
    public cameraMode: string,
    public filter: string,
    public click: number,

    public channelName: string,
  ){}

  createStory(): void {
    console.log("Story is Creating");
  }
}