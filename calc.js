 
var StatVal = {
    EK: {
        first: 0.89,
        second: 0.98,
    },
    
    
     VKS: {
        MA: 12,
        MAII: 20,
        MAGa: 12*1.3,
        MAIIGa: 20*1.3,
     },
    
    
     VKO: {
        AG: {
            S: [109, 5],
            M: [149, 10],
            L: [209, 15],
            pF: 12,
        },
    
        RB: {
            stundenlohn: 20,
            pV: 15,
            stundenlohnEk: 20*0.98,
            pvEk: 15*0.98,
    
        }
    
     },
    
     VES: {
        stundenlohnI: 60,
        stundenlohnII: 80,
     },
     
    dienstleistung : {
        content: 30,
        feeddes: 60,
        texter: 15,
        posting: 5,
        comMan: 30,
        bilderSe: NaN,
        bilderSeEi: NaN,
        bilderDavid: 15,
        bilderAlex: 5,
        bilderStock: 20,
        videosSe: NaN,
        videosEi: NaN,
        videosRoDa: 10,
        videosStock: 20,
        eniKosten: NaN,
        eniKostenZu: NaN,
     },
    
     aufwand : {
    
        chatGPTExcelAkKu: 20,
        einmalig: 60,
        chatGPTEi: 5,
        businessMaEi: 5,
        einloggenInFb: 5,
        kundenkom: 15,
        kundenkomEi: 75,
        shootingAn: 200,
        kommunikation: 15,
        einloggen: 10,
        kundenkommunikationVid: 15,
        kundenkommunikationEiVid: 125,
        shootingAnDaRo: 200,
        einloggenVid: 10,
    
     }
 }

 


var postNum = () => {
        var post = document.getElementById("posts").value;
        console.log(post)
        return parseFloat(post)
    
    }
    
    
var monthNum = (month) => {
        var month = document.getElementById("month").value;
        console.log(month)
        return parseFloat(month)
        
    }
var GB = postNum()*4.3
var GB2 = GB*monthNum()
var puffer = Math.ceil(GB2/10)
var videos = 2*monthNum()
var CP = Math.ceil(monthNum()/4)



/*var test = () => {
    console.log(GB)
    console.log(GB2)
    console.log(puffer)
    console.log(videos)
    console.log(CP)
}*/

var KostenEin = {
    content: 0,
    feeddes: 0,
    texter: 0,
    posting: 0,
    comMan: 0,
    bilderSe: 0,
    bilderSeEi: 0,
    bilderDavid: 0,
    bilderAlex: 0,
    bilderStock: 0,
    videosSe: 0,
    videosEi: 0,
    videosRoDa: 0,
    videosStock: 0,
    eniKosten: 0,
    eniKostenZu: 0,
    }
var contentRes = () => {
    var checked = document.getElementById("check2").checked;
    if (checked) {
        KostenEin.content = KostenEin.content+(StatVal.dienstleistung.content*CP+StatVal.aufwand.chatGPTExcelAkKu);
        
    }
    else {KostenEin.content = 0}
    
    console.log(KostenEin.content)
    console.log(checked)
    
    



}  

   

  
   

    
    









