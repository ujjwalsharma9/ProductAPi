import{ PipeTransform, Pipe} from '@angular/core';

@Pipe({
    name:'productfilter'
})
export class ProductFilterPipe implements PipeTransform{
    transform(items:any[], searchText:string): any[] {

        if(!items){
            return [];
        }
        if(!searchText){
            return items;
        }

        searchText=searchText.toLowerCase();
        console.log(searchText);
        return items.filter(a=>{
            console.log(a.Title);
            return a.Title.toLowerCase().includes(searchText);
        })
    }
}


