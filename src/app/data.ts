export class Data{
    
    local_format : String ;
    international_format : String;
    country_prefix : String ;
    country_code : String ;
    country_name : String ;
    location : String ;

    constructor(local_format: String,international_format:String,
        country_prefix:String,country_code:String,
        country_name:String,location:String) {
        this.local_format=local_format;
        this.international_format=international_format;
        this.country_prefix=country_prefix;
        this.country_code=country_code;
        this.country_name=country_name;
        this.location=location;
    }
}