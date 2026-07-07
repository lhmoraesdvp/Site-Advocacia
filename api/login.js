export default async function handler(req,res){

    const {password} = req.body;


    if(password === process.env.SITE_PASSWORD){

        res.setHeader(
            "Set-Cookie",
            "site_auth=true; Path=/; HttpOnly; Secure"
        );

        return res.status(200).json({
            success:true
        });

    }


    res.status(401).json({
        success:false
    });

}