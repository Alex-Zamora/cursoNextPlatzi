import 'isomorphic-fetch'
import Link from 'next/link'
import Layout from '../components/Layout'
import ChannelGrid from '../components/ChannelGrid'

export default class extends React.Component {

  static async getInitialProps() {
    let req = await fetch('https://api.audioboom.com/channels/recommended')
    let { body: channels } = await req.json()
    return { channels }
  }

  render() {
    const { channels } = this.props

    return <Layout title="Podcast Next.js and React">
      <ChannelGrid channels={channels} />
    </Layout>
  }
}