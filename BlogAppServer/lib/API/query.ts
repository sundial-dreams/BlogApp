import { format } from "mysql";

export const queryArticleById = id => format(`
SELECT
    article_title,
    article_classify,
    label_name,
    user_nickname,
    user_email,
    user_picture,
    user_position,
    user_company,
    user_description,
    article_text,
    publish_at,
    article_image,
    read_num,
    like_num,
    comment_num,
    collection_num,
    share_num,
    user_id,
    id 
FROM
    article
    JOIN user ON user_id = article_author
    JOIN label ON article_label = label_id 
WHERE
    id = ?
`, [id]);

export const queryArticleByClassify = classify => format(`
SELECT
    article_title,
    article_classify,
    label_name,
    user_nickname,
    user_email,
    user_picture,
    user_position,
    user_company,
    user_description,
    article_text,
    publish_at,
    article_image,
    read_num,
    like_num,
    comment_num,
    collection_num,
    share_num,
    user_id,
    id 
FROM
    article
    JOIN user ON user_id = article_author
    JOIN label ON article_label = label_id 
WHERE
    article_classify = ?
`, [classify]);

export const queryCommentById = articleId => format(`
SELECT
	comment_id,
	comment_text,
	comment_article,
	comment_user,
	user_nickname,
	user_picture,
	comment_time
FROM
	comment JOIN user ON user_id = comment_user 
WHERE
	comment_article = ?`
    , [articleId]);