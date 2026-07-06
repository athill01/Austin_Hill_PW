import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="portfolio_grid mb-5">
          {dataportfolio.map((data, i) => {
            return (
              <article key={i} className="project_card">
                <div className="project_preview">
                  {data.image ? (
                    <img
                      src={data.image}
                      alt={data.title}
                      className={`project_preview_image ${data.previewClass || ""}`}
                    />
                  ) : (
                    <div className="project_preview_inner">
                      <span>{data.visualLabel}</span>
                    </div>
                  )}
                </div>
                <div className="project_body">
                  <p className="project_subtitle">{data.subtitle}</p>
                  <h2 className="project_title">{data.title}</h2>
                  <p className="project_description">{data.description}</p>

                  <div className="project_tools">
                    <span className="project_tools_label">Tools:</span>
                    <div className="project_tools_list">
                      {data.tools.map((tool, toolIndex) => (
                        <span key={toolIndex} className="project_tool_tag">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project_actions">
                    <a
                      href={data.projectLink}
                      className="project_action_btn primary"
                      download={data.primaryDownload ? "" : undefined}
                    >
                      {data.primaryLabel || "View Project"}
                    </a>
                    {data.secondaryLabel ? (
                      <a
                        href={data.secondaryLink}
                        className="project_action_btn secondary"
                        download={data.secondaryDownload ? "" : undefined}
                      >
                        {data.secondaryLabel}
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
