import React, { Component } from 'react';
import Header from '../Includes/Header';
import Axios from 'axios';
import { API_BASE_URL } from '../../Config/Config';
import $ from 'jquery';

export default class AddACard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            all_sports: [],
            all_years: [],
            all_brands: [],
            all_titles: [],
            all_teams: [],
            all_numerical_grades: [],
            all_item_conditions: [],
            selectSport: 1,
            selectYear: 60,
            selectBrand: 888,
            query: '',
            selectTeam: '',
            player: {},
            selectNumbering: '',
            selectVariant: '',
            selectGradeService: '',
            selectNumericalGrade: '',
            selectItemConditions: '',
            rookie: null,
            autograph: null,
            jersey: null,
            patch: null,
            description: '',
            showStore: false
        }
    }

    componentDidMount() {
        Axios.get(API_BASE_URL + "api/get-sports")
            .then(({ data }) => {
                this.setState({
                    all_sports: data
                });
            }).catch(err => console.log(err));

        Axios.get(API_BASE_URL + "api/get-numerical-grades")
            .then(({ data }) => {
                this.setState({
                    all_numerical_grades: data
                });
            }).catch(err => console.log(err));

        Axios.get(API_BASE_URL + "api/get-item-conditions")
            .then(({ data }) => {
                this.setState({
                    all_item_conditions: data
                });
            }).catch(err => console.log(err));
        // window.selectpicker();
        $('#gallery-photo-add').on('change', function () {
            const input = this;
            const placeToInsertImagePreview = '.cardGallery';
            if (input.files) {
                console.log('input-files', input.files);
                const filesAmount = input.files.length;
                for (let i = 0; i < filesAmount; i++) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        $($.parseHTML('<img class="materialboxed responsive-img">'))
                            .attr('src', event.target.result)
                            .appendTo($('<div class="cardImgs"><a class="cancel"><img src="./app-assets/img/cancel.svg">')
                                .appendTo(placeToInsertImagePreview));
                    }
                    reader.readAsDataURL(input.files[i]);
                    console.log('reader', reader);
                }
            }
        });

        $('.cardGallery').on("click", 'a.cancel', () => {
            $(this).parent('.cardImgs').hide();
        });
    }

    cardListSelect(e) {
        const element = document.getElementById('query');
        element.value = e.target.dataset.cardlist;
        this.handleInputChange({ target: { name: 'query', value: element.value } });
        this.setState({ showStore: true });
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log('event', name, value);
        this.setState({
            [name]: value
        });

        switch (name) {
            case 'selectSport':
                Axios.get(API_BASE_URL + "api/get-years/" + value)
                    .then(({ data }) => {
                        this.setState({
                            all_years: data
                        });
                    }).catch(err => console.log(err));
                break;
            case 'selectYear':
                if (this.state.selectSport) {
                    Axios.get(API_BASE_URL + "api/get-brands/" + this.state.selectSport + '/' + value)
                        .then(({ data }) => {
                            this.setState({
                                all_brands: data
                            });
                        }).catch(err => console.log(err));
                }
                break;
            case 'selectBrand':
                if (this.state.selectSport && this.state.selectYear) {
                    Axios.get(API_BASE_URL + "api/get-teams/" + this.state.selectSport + '/' + this.state.selectYear + '/' + value)
                        .then(({ data }) => {
                            this.setState({
                                all_teams: data
                            });
                        }).catch(err => console.log(err));
                }
                break;
            case 'query':
                const queryEn = btoa(value) ? btoa(value) : null;
                if (this.state.selectSport && this.state.selectYear && this.state.selectBrand) {
                    Axios.get(API_BASE_URL + "api/get-titles/" + this.state.selectSport + '/' + this.state.selectYear + '/' + this.state.selectBrand + '/' + queryEn)
                        .then(({ data }) => {
                            this.setState({
                                all_titles: data
                            });
                        }).catch(err => console.log(err));
                }
                if (this.state.selectSport) {
                    Axios.get(API_BASE_URL + "api/get-player/" + this.state.selectSport + '/' + queryEn)
                        .then(({ data }) => {
                            this.setState({
                                player: data ? data : 'NA'
                            });
                        }).catch(err => console.log(err));
                }
                const idx1 = value.indexOf(' - ');
                const idx2 = value.indexOf('#');
                const variant = (idx1 !== -1 && idx2 !== -1) ? value.substring(idx1 + 3, idx2 - 1) : 'NA';
                let numbering = value.split(' SN').pop();
                numbering = isNaN(numbering) || !numbering ? 'NA' : numbering;
                this.setState({
                    query: value,
                    selectVariant: variant,
                    selectNumbering: numbering
                });
                break;
            case 'jersey':
                if (value === 'Yes') {
                    this.setState({ patch: 'No' })
                }
                break;
            case 'patch':
                if (value === 'Yes') {
                    this.setState({ jersey: 'No' })
                }
                break;
            default:
                break;
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

    }

    render() {
        return (
            <React.Fragment>
                <Header pagename="Add A Card" history={this.props.history} />
                <main className="wrapper mb-0">
                    <div className="sec secInner">
                        <div className="container">
                            <form className="secForm" onSubmit={this.handleSubmit} autocomplete="off">
                                <h6 className="controlHeading">Add Images <span className="required red-text">*</span></h6>
                                <div className="file-field input-field customField">
                                    <input type="file" multiple id="gallery-photo-add" className="fileInput validate" />
                                    <div className="cardGallery"></div>
                                </div>
                                <h6 className="controlHeading">Categories </h6>
                                <div className="customField">
                                    <label>Sport <span className="required red-text">*</span></label>
                                    <select onChange={this.handleInputChange} name="selectSport">
                                        <option value="DEFAULT">Select Sport</option>
                                        {this.state.all_sports.map((sports) => {
                                            return <option key={sports.id} value={sports.id}>{sports.sports_name}</option>;
                                        })}
                                    </select>
                                </div>
                                <div className="customField">
                                    <label>Year <span className="required red-text">*</span></label>
                                    <select onChange={this.handleInputChange} name="selectYear">
                                        <option value="DEFAULT">Select Year</option>
                                        {this.state.all_years.map((year) => {
                                            return <option key={year.id} value={year.id}>{year.actual_years}</option>;
                                        })}
                                    </select>
                                </div>
                                <div className="customField">
                                    <label>Brand <span className="required red-text">*</span></label>
                                    <select onChange={this.handleInputChange} name="selectBrand">
                                        <option value="DEFAULT">Select Brand</option>
                                        {this.state.all_brands.map((brand) => {
                                            return <option key={brand.id} value={brand.id}>{brand.brand_name}</option>;
                                        })}
                                    </select>
                                </div>
                                <h6 className="controlHeading">Card Details </h6>
                                <div className="input-field customField">
                                    <label className="active">Title <span className="required red-text">*</span></label>
                                    <input onChange={this.handleInputChange} value={this.state.query} name="query" id="query" type="text" className="autocomplete validate" />
                                    <div id="suggesstion-box" className="searchcardtitle" style={{display: this.state.showStore ? 'none' : 'block' }}>
                                        <ul id="card-list" className="list-unstyled">
                                            {this.state.all_titles.map((title) => {
                                                return <li key={title.id} data-cardlist={title.card_name} onClick={this.cardListSelect.bind(this)}>
                                                    {title.card_name}
                                                </li>
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <div className="customField">
                                    <label>Team <span className="required red-text">*</span></label>
                                    <select onChange={this.handleInputChange} name="selectTeam">
                                        <option value="DEFAULT">Select Team</option>
                                        {this.state.all_teams.map((team) => {
                                            return <option key={team.id} value={team.id}>{team.team_name}</option>;
                                        })}
                                    </select>
                                </div>
                                <div className="input-field customField">
                                    <label>Player Name <span className="required red-text">*</span></label>
                                    <input placeholder="" type="text" className="validate" disabled name="player" value={this.state.player.player_name} />
                                </div>
                                <div className="input-field customField">
                                    <label>Variant <span className="required">(Optional)</span></label>
                                    <input placeholder="" type="text" className="validate" name="selectVariant" value={this.state.selectVariant} disabled />
                                </div>
                                <div className="input-field customField">
                                    <label>Numbering <span className="required red-text">*</span></label>
                                    <input placeholder="" type="text" className="validate" name="selectNumbering" value={this.state.selectNumbering} disabled />
                                </div>
                                <h6 className="controlHeading">Grading </h6>
                                <div className="customField">
                                    <label>Grading Service <span className="required">(Optional)</span></label>
                                    <select onChange={this.handleInputChange} name="selectGradeService">
                                        <option value='DEFAULT'> EX: BGS, PSA, SGC, etc…</option>
                                        <option value='1' >PSA</option>
                                        <option value='2' >BGS</option>
                                        <option value='3' >SGC</option>
                                    </select>
                                </div>
                                <div className="customField">
                                    <label>Numerical Grade <span className="required">(Optional)</span></label>
                                    <select onChange={this.handleInputChange} name="selectNumericalGrade">
                                        <option value="DEFAULT">EX: 10, 9.5, 9, etc.</option>
                                        {this.state.all_numerical_grades.map((grades) => {
                                            return <option key={grades.id} value={grades.id}>{grades.grade}</option>;
                                        })}
                                    </select>
                                </div>
                                <h6 className="controlHeading">Item Condition <span className="required red-text">*</span></h6>
                                <div className="customField">
                                    <select onChange={this.handleInputChange} name="selectItemConditions">
                                        <option value="DEFAULT">Select Item Condition</option>
                                        {this.state.all_item_conditions.map((itemCon) => {
                                            return <option key={itemCon.id} value={itemCon.id}>{itemCon.item_condition}</option>;
                                        })}
                                    </select>
                                </div>
                                <h6 className="controlHeading">Rookie</h6>
                                <div className="cardCheckbox">
                                    <p>
                                        <input onChange={this.handleInputChange} value="Yes" checked={this.state.rookie === "Yes"}
                                            className="with-gap" name="rookie" type="radio" id="rookie1" />
                                        <label htmlFor="rookie1">Yes</label>
                                    </p>
                                    <p>
                                        <input onChange={this.handleInputChange} value="No" checked={this.state.rookie === "No"}
                                            className="with-gap" name="rookie" type="radio" id="rookie2" />
                                        <label htmlFor="rookie2">No</label>
                                    </p>
                                </div>
                                <h6 className="controlHeading">Autograph</h6>
                                <div className="cardCheckbox">
                                    <p>
                                        <input onChange={this.handleInputChange} value="Yes" checked={this.state.autograph === "Yes"}
                                            className="with-gap" name="autograph" type="radio" id="autograph1" />
                                        <label htmlFor="autograph1">Yes</label>
                                    </p>
                                    <p>
                                        <input onChange={this.handleInputChange} value="No" checked={this.state.autograph === "No"}
                                            className="with-gap" name="autograph" type="radio" id="autograph2" />
                                        <label htmlFor="autograph2">No</label>
                                    </p>
                                </div>
                                <h6 className="controlHeading">Jersey</h6>
                                <div className="cardCheckbox">
                                    <p>
                                        <input onChange={this.handleInputChange} value="Yes" checked={this.state.jersey === "Yes"}
                                            className="with-gap" name="jersey" type="radio" id="jersey1" />
                                        <label htmlFor="jersey1">Yes</label>
                                    </p>
                                    <p>
                                        <input onChange={this.handleInputChange} value="No" checked={this.state.jersey === "No"}
                                            className="with-gap" name="jersey" type="radio" id="jersey2" />
                                        <label htmlFor="jersey2">No</label>
                                    </p>
                                </div>
                                <h6 className="controlHeading">Patch (Multi-Color Jersey) </h6>
                                <div className="cardCheckbox">
                                    <p>
                                        <input onChange={this.handleInputChange} value="Yes" checked={this.state.patch === "Yes"}
                                            className="with-gap" name="patch" type="radio" id="patch1" />
                                        <label htmlFor="patch1">Yes</label>
                                    </p>
                                    <p>
                                        <input onChange={this.handleInputChange} value="No" checked={this.state.patch === "No"}
                                            className="with-gap" name="patch" type="radio" id="patch2" />
                                        <label htmlFor="patch2">No</label>
                                    </p>
                                </div>
                                <h6 className="controlHeading">Description </h6>
                                <div className="input-field customField">
                                    <textarea value={this.state.description} onChange={this.handleInputChange} name="description" id="textarea1" className="materialize-textarea" ></textarea>
                                </div>
                                <div className="center-align">
                                    <input type="submit" className="btn black w-100" value="Next" />
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}