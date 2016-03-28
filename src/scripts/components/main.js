module.exports = React.createClass({
    getInitialState: function() {
        return {lang: 'ua'}
    },
    setLang: function(lang) {
        return function() {
            this.setState({lang: lang})
        }.bind(this)
    },
    render: function() {
        i18n = this.props.bd[this.state.lang];
        return (
            <div className="container">
                <nav className="navbar navbar-default">
                    <div className="row">
                        <div className="col-xs-3 text-right">
                            <span>Change language:</span>
                        </div>
                        <div className="col-xs-3">
                            <ul className="horizontal">
                                <li><a className="btn btn-primary" onClick={this.setLang('en')}>En</a></li>
                                <li><a className="btn btn-primary" onClick={this.setLang('ru')}>Ru</a></li>
                                <li><a className="btn btn-primary active" onClick={this.setLang('ua')}>Ua</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-6">
                            <ul className="horizontal text-right">
                                <li><a className="btn" target="_blank" href="https://www.facebook.com/YakobchukRoman">FB</a>
                                </li>
                                <li><a className="btn" target="_blank"
                                    href="https://www.linkedin.com/profile/view?id=157411118">LinkedIn</a></li>
                                <li><a className="btn" target="_blank" href="https://github.com/romabelka">GitHub</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="row">
                    <div className="col-md-12">
                        <h1>{i18n.name}</h1>

                        <h3>{i18n.main.join(', ')}</h3>

                        <h4>{i18n.also}</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <address>
                            <p>Skype: <span>r.iakobchuk</span></p>

                            <p>Email: <a href="#">{i18n.showEmail}</a></p>

                            <p>Phone: <span>+38 (093) 774-72-55</span></p>
                        </address>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <h2>{i18n.professional.title}</h2>
                        <ul>
                        {i18n.professional.elements.map(function(text) {return <li>{text}</li>})}
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h2>{i18n.personal.title}</h2>
                        <ul>
                        {i18n.personal.elements.map(function(text) {return <li>{text}</li>})}
                        </ul>
                    </div>
                </div>
                <h2>{i18n.skills}</h2>

                <div className="row">
                    <div className="col-md-6">
                        <h3>Client-side</h3>
                        <table className="table table-striped">
                        {this.props.bd.technologies.client.map(function(techs) {
                          return <tr><td>{techs.join(', ')}</td></tr>
                        })
                            }
                        </table>
                    </div>
                    <div className="col-md-6">
                        <h3>Server-side</h3>
                        <table className="table table-striped">
                        {this.props.bd.technologies.server.map(function(techs) {
                            return <tr><td>{techs.join(', ')}</td></tr>
                        })
                            }
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h3>{i18n.conferences.title}</h3>
                        <ul>
                            {i18n.conferences.elements.map(function(conf){
                                return <li><a href={conf.link}>{conf.name}</a></li>
                            })}
                        </ul>
                        <h3>{i18n.teaching}</h3>
                        <ul>
                            {this.props.bd.teaching.courses.map(function(course) {
                                return <li key={course.link}><a href={course.link}>{course.name}</a></li>
                            })}
                        </ul>
                        <h3>Open-source</h3>
                        <ul>
                            {this.props.bd.openSource.map(function(proj) {
                                return <li><a href={proj.link}>{proj.name}</a> - {proj.role}</li>
                            })}
                        </ul>
                        <h3>{i18n.languages}</h3>
                        <ul>
                            {this.props.bd.languages.map(function(text) {return <li>{text}</li>})}
                        </ul>

                        <h3>{i18n.education.title}</h3>
                        <ul>
                        {i18n.education.places.map(function(place){
                            return <li>{place.name}
                                <ul>
                            {place.achievements.map(function(text) {
                                return <li>{text}</li>
                            })}
                                    </ul>
                            </li>
                        })}
                            <li>{i18n.education.courses}:
                                <ul>
                                {this.props.bd.courses.map(function(course) {
                                    return <li>{course.name} - <a href={course.link}>{course.link}</a></li>
                                    })}
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
        )
    }
});
