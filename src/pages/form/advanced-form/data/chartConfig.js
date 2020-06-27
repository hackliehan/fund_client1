
import styles from '../style.less'

function randomColor (){
    return "#"+Math.random().toString(16).slice(-6);  
}

export const chartConfigList = [
    {name:'收益率',field:'yields',show:true,yIndex:0},
    {name:'年化率',field:'yearYeilds',show:true,type:'bar',yIndex:3},
    {name:'总支出',field:'totalCost',show:true,yIndex:1},
    {name:'期数',field:'dealCount',show:true,yIndex:4},
    {name:'PE_TTM',lineStyle:{color:'#660099'},field:'pe',show:true,yIndex:2},
    {name:'PE_Q2V',lineStyle:{color:'#660099'},field:'pe_q2v',show:true,yIndex:2},
    {name:'PE_Q5V',lineStyle:{color:'#660099'},field:'pe_q5v',show:true,yIndex:2},
    {name:'PE_Q8V',lineStyle:{color:'#660099'},field:'pe_q8v',show:true,yIndex:2}
];

export const initChartConfig = (strategies)=>{
    const chartConfig = [];
    const peColor = randomColor();
    strategies.forEach(item=>{
        const name = item.name;
        const singleConfig = chartConfigList.map(item=>{
            if(item.field.indexOf('pe')!== -1){
                return {
                    ...item,
                    lineStyle:{
                        color:peColor
                    }
                }
            }
            return {...item}
        });
        chartConfig.push({
            name,
            config:singleConfig
        });
    });
    return chartConfig;
}



