function checkLogin()
    {
        if (localStorage.getItem("storeEmail") == 0 && localStorage.getItem("storePasword") == 0)
        {
            window.open("login.html");
            window.close();
        }
        else 
        {}

    }
