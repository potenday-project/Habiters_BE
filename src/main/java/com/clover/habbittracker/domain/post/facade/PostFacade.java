package com.clover.habbittracker.domain.post.facade;

import org.springframework.stereotype.Service;

import com.clover.habbittracker.domain.comment.service.CommentService;
import com.clover.habbittracker.domain.post.service.PostService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PostFacade {

	private final PostService postService;
	private final CommentService commentService;


}
