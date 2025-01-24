import { client } from "@/sanity/lib/client";

export default  async function Sanity_productpg(){
    const fetch_data = await client.fetch(`*[_type == 'products']`)
    
    return(
      <div>
        <h1>hello</h1>
      </div>  
    );
}