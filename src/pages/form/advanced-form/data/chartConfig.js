
import styles from '../style.less'

function randomColor (){
    return `#${Math.random().toString(16).slice(-6)}`;
}

export const chartConfigList = [
    {name:'收益',field:'income',show:true,yIndex:5,chartIds:[2]},
    {name:'收益率',field:'yields',show:true,yIndex:0,chartIds:[1]},
    {name:'年化率',field:'yearYeilds',show:true,type:'bar',yIndex:3,chartIds:[1]},
    {name:'总支出',field:'totalCost',show:true,yIndex:1,chartIds:[1,2]},
    {name:'期数',field:'dealCount',show:true,yIndex:4,chartIds:[1,2]},
    {name:'PE_TTM',field:'pe',show:false,yIndex:2,chartIds:[0]}
];

export const getPeConfigList = (show)=>{
  return [
    {name:'PE_TTM',field:'pe',show,yIndex:2},
    {name:'PE_Q2V',field:'pe_q2v',show,yIndex:2},
    {name:'PE_Q5V',field:'pe_q5v',show,yIndex:2},
    {name:'PE_Q8V',field:'pe_q8v',show,yIndex:2}
  ]
}

export const initChartConfig = (strategies)=>{
    const chartConfig = [];
    const peColor = randomColor();
    strategies.forEach(item=>{
        const {name} = item;
        const singleConfig = chartConfigList.map(item=>({...item}));
        chartConfig.push({
            name,
            config:singleConfig
        });
    });
    return chartConfig;
}



