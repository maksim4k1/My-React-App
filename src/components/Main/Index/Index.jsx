import style from "./Index.module.css"

function Index(){
    // Return XML
    return(
        <div>
            <div className={style.image}>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" />
            </div>
            <section className={style.section}>
                <h1 className={style.title}>Главная страница</h1>
                <p className={style.text}>Добро пожаловать на мое новое React JS приложение</p>
            </section>
        </div>  
    );
}

export default Index;