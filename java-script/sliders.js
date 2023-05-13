document.addEventListener("DOMContentLoaded", () => {
    const slider = new ItcSimpleSlider(".itcss", {
        autoplay: true,
        interval: 10000,
    });
    document.querySelector(".btn-prev").onclick = () => {
        slider.prev();
    };
    document.querySelector(".btn-next").onclick = () => {
        slider.next();
    };
});

$(function () {
    let table = $('.footer'), tbody = "", fileAdress = "https://raw.githubusercontent.com/Danturador/testDar.io/main/GoW_III/DevelopersTable.xml";
    
    const RequestObject = {
    
        url: fileAdress,
        method: 'GET',
        dataType: 'xml',
        async: true,
        success: (resp) => {
            $(resp).find("infoAbout").each((index, item) => {
                tbody += `<tr>`;
                    tbody += `<td> ${item.children[0].textContent} </td>`;
                    tbody += `<td> ${item.children[1].textContent} </td>`;
                    tbody += `<td> ${item.children[2].textContent} </td>`;
                tbody += `</tr>`;
            })
            table.html(tbody);
        },
        error: (error) => console.log(error)
    }
    $.ajax(RequestObject);
});
