$(function() {

	init();

})

function init() {

	var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];

	//急诊
	var lineChart1 = echarts.init(document.getElementById('lineChart1'));
	lineChart1.setOption({
		//		title: {
		//			text: '今日门急诊人次',
		//		 textStyle: {
		//            fontWeight: "normal",
		//            color: "#fff", 
		//            fontSize: 14
		//    }
		//		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				label: {
					backgroundColor: '#6a7985'
				}
			}
		},
		legend: {
			padding: [30, 0, 0, 0], //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
			data: ['门诊', '急诊'],
			textStyle: { //图例文字的样式
				color: '#ccc',
				fontSize: 14
			}
		},

		grid: {
			left: '3%',
			right: '4%',
			bottom: '5%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			boundaryGap: false,
			data: ['8:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
			axisLine: {
				lineStyle: {
					color: '#FFF'

				}
			}
		}],
		yAxis: [{
			type: 'value',
			axisLine: {
				lineStyle: {
					color: '#FFF'

				}
			}

		}],
		series: [{

				name: '门诊',
				type: 'line',
				stack: '总量',
				areaStyle: {},
				//				itemStyle: {
				//					normal: {
				//						color: '#000', //改变折线点的颜色
				//						lineStyle: {
				//							color: '#fff' //改变折线颜色
				//						}
				//					}
				//				},
				data: [120, 132, 101, 134, 90, 230]
			},
			{
				name: '急诊',
				type: 'line',
				stack: '总量',
				areaStyle: {},
				data: [220, 182, 191, 234, 290, 330]
			}
		]
	})

	var lineChart2 = echarts.init(document.getElementById('lineChart2'));
	lineChart2.setOption({
		radar: [{
			indicator: [
				{
					text: '',
					

				},
				{
					text: '销售单位'
				},
				{
					text: '使用单位'
				},
				{
					text: '生产单位'
				},
				{
					text: '处置单位'
				},
				{
					text: '储存单位'
				}
			],
			center: ['50%', '40%'], // 位置
			radius: 130, //大小
			startAngle: 90,
			splitNumber: 4,
			shape: 'circle',
			name: {
				formatter: '{value}',
				textStyle: {
					color: 'aqua' // 文字颜色
				}
			},
			splitArea: {
				areaStyle: {
					color: [
						'rgba(114, 172, 209, 0.1)',
						'rgba(114, 172, 209, 0.1)',
						'rgba(114, 172, 209, 0.1)',
						'rgba(114, 172, 209, 0.1)',
						'rgba(114, 172, 209, 0.1)'
					], //圆环颜色
					shadowColor: 'aqua', // 圆颜色
					shadowBlur: 10
				}
			},
			axisLine: {
				lineStyle: {
					color: 'aqua' // 分割线
				}
			},
			splitLine: {
				lineStyle: {
					color: 'aqua' //圆线
				}
			}
		}],
		series: [{
			name: '雷达图',
			type: 'radar',
			itemStyle: {
				emphasis: {
					// color: 各异,
					lineStyle: {
						width: 4
					}
				}
			},
			data: [{
				value: [5678, 3678, -6781, 1678, 1780, 3671],
				areaStyle: {
					normal: {
						color: 'rgba(0, 255, 255, 0.8)' // 选择区域颜色
					}
				}
			}]
		}]
	})
}