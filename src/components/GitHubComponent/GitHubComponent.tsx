import { faCheckCircle, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import { GitHubComponentDto } from '../../models'
import './GitHubComponent.css'

export function GitHubComponent({ name, description, status, }: GitHubComponentDto) {
    return (
        <div className="card">
            <div className="card-content">
                <div className="columns">
                    <div className="column">
                        <p className="title has-text-left">
                            <span className='icon-text'>
                                <span className='text'>{name}</span>
                                <span className="icon has-text-info" title={description}>
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                </span>
                            </span>
                        </p>
                        <p className="subtitle has-text-left">
                            {status}
                        </p>
                    </div>
                    <div className="column is-one-quarter">
                        <span className={
                            classNames('icon', 'is-large', {
                                'has-text-success': status === 'operational',
                                'has-text-danger': status === 'major_outage',
                                'has-text-warning': status === 'partial_outage' || status === 'degraded_performance',
                            })
                        }>
                            <FontAwesomeIcon icon={faCheckCircle} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
