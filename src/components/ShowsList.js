import React, { Component } from 'react'
import Show from './Show'
import GenreList from './GenreList'
import Footer from './Footer'

class ShowsList extends Component {
  constructor (props){
    super(props);
  }
  
  componentDidMount(){
    const {getShows} = this.props;
    getShows();
  }
  
  render(props){
    const { shows } = this.props;
    return (  
      <div>
        <h1>My Shows</h1>
        <table cellPadding="5">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Network</th>
              <th>Status</th>
              <th>Genre</th>
              <th>In Queue</th>
            </tr>
            {shows.map((show,idx) => (
              <tr key={idx}>
                <td>
                  <Show name={show.seriesName} id={show.id} />
                </td>
                <td>
                  {show.network}
                </td>
                <td>
                  {show.status}
                </td>
                <td>
                  <GenreList genre={show.genre} />
                </td>
                <td>
                  {show.inQueue ?
                    (<b>√</b>) : (<b>x</b>)
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Footer />
      </div>
    )
  }
}

export default ShowsList