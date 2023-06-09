-- init SQL
-- create schema habiters-db;
-- use habiters-db;

DROP TABLE IF EXISTS bookmark;
DROP TABLE IF EXISTS `like`;
DROP TABLE IF EXISTS comment;
DROP TABLE IF EXISTS post;

DROP TABLE IF EXISTS habit_check;
DROP TABLE IF EXISTS habbit;
DROP TABLE IF EXISTS diary;
DROP TABLE IF EXISTS member;

create table member
(
    id              bigint auto_increment primary key,
    email           varchar(255) null,
    nick_name       varchar(255) null,
    oauth_id        varchar(255) null,
    profile_img_url varchar(255) null,
    provider        varchar(255) null,
    created_date    datetime(6)  null,
    updated_date    datetime(6)  null,
    deleted         boolean      not null
);

create table diary
(
    id              bigint auto_increment primary key,
    content         varchar(255) null,
    end_update_date datetime(6)  null,
    member_id       bigint       null,
    created_date    datetime(6)  null,
    updated_date    datetime(6)  null,
    deleted         bit          not null,
    constraint FKbyluyva0mxnf5jitf297oxlxd
        foreign key (member_id) references member (id)
);

create table habbit
(
    id           bigint auto_increment primary key,
    content      varchar(255) null,
    member_id    bigint       null,
    created_date datetime(6)  null,
    updated_date datetime(6)  null,
    deleted      bit          not null,
    constraint FK2tlodega5v0fas0uv1ksxu8ci
        foreign key (member_id) references member (id)
);

create table habit_check
(
    id           bigint auto_increment primary key,
    checked      bit         not null,
    habit_id     bigint      null,
    created_date datetime(6) null,
    updated_date datetime(6) null,
    deleted      bit         not null,
    constraint FK6exrsx5hm05v3ur6c3ttiqopd
        foreign key (habit_id) references habbit (id)
);

create table post
(
    id           bigint auto_increment primary key,
    title        varchar(255) not null,
    content      varchar(255) not null,
    category     varchar(255) not null,
    views        bigint       not null default 0,
    member_id    bigint       null,
    created_date datetime(6)  not null default CURRENT_TIMESTAMP(6),
    updated_date datetime(6)  not null default CURRENT_TIMESTAMP(6),
    deleted      boolean      not null default false
);

create table comment
(
    id           bigint auto_increment primary key,
    content      varchar(255) not null,
    member_id    bigint       null,
    post_id      bigint       null,
    comment_id   bigint       null,
    created_date datetime(6)  not null default CURRENT_TIMESTAMP(6),
    updated_date datetime(6)  not null default CURRENT_TIMESTAMP(6),
    deleted      boolean      not null default false
);

create table `like`
(
    id           bigint auto_increment primary key,
    type         varchar(255) null,
    post_id      bigint       null,
    comment_id   bigint       null,
    member_id    bigint       null,
    created_date datetime(6)  not null default CURRENT_TIMESTAMP(6),
    updated_date datetime(6)  not null default CURRENT_TIMESTAMP(6),
    deleted      boolean      not null default false
);

create table bookmark
(
    id           bigint auto_increment primary key,
    post_id      bigint      null,
    member_id    bigint      null,
    created_date datetime(6) not null default CURRENT_TIMESTAMP(6),
    updated_date datetime(6) not null default CURRENT_TIMESTAMP(6),
    deleted      boolean     not null default false
);

