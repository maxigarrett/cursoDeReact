export const HelpHttp=()=>{
    //fetch que realiza la peticion y manipulamos el objeto de opciones
    const customFetch=(Url,options)=>{
        const defaultHeader={
            contentType:'application/json',
        }

        const controller= new AbortController();

        //le agragamos a opciones que es un obj la propiedad signal para abortar le peticion
        options.signal= controller.signal;
        
        //si no indicamos un method entonces es get por lo cual no necesita el obj options,es decir,
        //si viene el method con valor pues le dejamos ese valor options.method=options.method
        //sino le decimo que es GET. || 'GET'
        options.method=options.method || 'GET';
        
        options.headers=options.header? {...defaultHeader,...options.header}:defaultHeader;

        options.body=JSON.stringify(options.body) || false;
        
        //como no admite false en el body entonces si es falce borramos la la propiedad body
        if(!options.body) delete options.body

        console.log(options)
        setTimeout(()=>{
            controller.abort();
        },3000)

        return fetch(Url,options)
        .then(res=> 
            res.ok
            ?res.json()
            :Promise.reject({            
            err:true,
            status:res.status || '00',
            statusText:res.statusText || 'ocurrio un error'}))
        .catch(err=>err)
    }

    //si en el get no tiene opciones que es lo mas logico le pasamos un obj vacio que se llenara
    //en customFetch con las propiedades que le pasamos por defecto
    const get=(url,options={})=>customFetch(url,options)
    const post=(url,options={})=>{
        options.method='POST'
        customFetch(url,options)
    }
    const put=(Url,options={})=>{
        options.method='PUT'
        customFetch(url,options)
    }
    const delet=(Url,options={})=>{
        options.method='DELETE'
        customFetch(url,options)
    }

    //shortcut que existen desde msc6 que como el valor y la propiedad tienen el mismo nombre
    //se puede exportar de esta forma
    return{
        get,
        post,
        put,
        delet,
    }
}