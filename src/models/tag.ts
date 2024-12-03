export class Tag{
    static readonly ANGULAR = new Tag('Angular','red');
    static readonly TYPESCRIPT = new Tag('Typescript','green');
    static readonly JAVASCRIPT = new Tag('Javascript','orange');
    static readonly NODEJS = new Tag('Node JS','purple');
    static readonly REACT = new Tag('React JS','brown');
    static readonly MONGODB = new Tag('Mongoose','green');


    private constructor(private readonly key:string, public readonly color:string){
    }

    toString(){
        return this.key
    }
}