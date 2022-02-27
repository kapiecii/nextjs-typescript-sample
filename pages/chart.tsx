import Layout from '../components/layout'
import {
	RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend
} from 'recharts'

const data = [
	{subject: "A", userA: 100, userB: 80, fullMark: 100},
	{subject: "B", userA: 50, userB: 70, fullMark: 100},
	{subject: "C", userA: 10, userB: 20, fullMark: 100},
	{subject: "D", userA: 70, userB: 90, fullMark: 100},
];

const Chart = () => {
	return (
		<Layout title="Next.js + Goサンプル">
			<p>チャート検証画面</p>
			<RadarChart outerRadius={150} width={730} height={400} data={data}>
				<PolarGrid />
				<PolarAngleAxis dataKey="subject" />
				<PolarRadiusAxis domain={[0, 100]} />
				<Radar name="userA" dataKey="userA" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
				<Radar name="userB" dataKey="userB" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
				<Legend />
			</RadarChart>
		</Layout>
	      )
}

export default Chart